package at.jku.platform.service;

import at.jku.platform.domain.*;
import at.jku.platform.repository.AdminTaskRepository;
import at.jku.platform.repository.FileRepository;
import at.jku.platform.repository.UserTaskRepository;
import at.jku.platform.service.dto.UserTaskDTO;
import at.jku.platform.web.rest.errors.UserTaskDoesNotExistException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserTaskService {

    private final Logger logger = LoggerFactory.getLogger(UserExtraService.class);

    private final UserTaskRepository userTaskRepository;

    private final AdminTaskRepository adminTaskRepository;

    private final FileRepository fileRepository;

    public UserTaskService(UserTaskRepository userTaskRepository, AdminTaskRepository adminTaskRepository, FileRepository fileRepository) {
        this.userTaskRepository = userTaskRepository;
        this.adminTaskRepository = adminTaskRepository;
        this.fileRepository = fileRepository;
    }

    @Transactional(readOnly = true)
    public Page<UserTask> getUserTasks(Pageable pageable) {
        return userTaskRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    public Optional<UserTask> getUserTask(long id) {
        return userTaskRepository.findById(id);
    }

    @Transactional
    public void removeUserTask(long id) {
        UserTask userTask = userTaskRepository.getById(id);
        userTaskRepository.deleteById(id);
        fileRepository.deleteById(userTask.getSubmission_excel().getId());
        fileRepository.deleteById(userTask.getInstruction_user_excel().getId());
    }

    @Transactional
    public UserTask addUserTask(User user, AdminTask adminTask, File instruction_user_excel, File submission_excel, boolean isCorrect) {
        UserTask userTask = new UserTask();
        userTask.setUser(user);
        userTask.setAdminTask(adminTask);
        userTask.setInstruction_user_excel(instruction_user_excel);
        userTask.setSubmission_excel(submission_excel);
        userTask.setCorrect(isCorrect);
        userTaskRepository.save(userTask);
        logger.debug("Created new User Task: {}", userTask);
        return userTask;
    }

    @Transactional
    public UserTask updateUserTask(
        long id,
        boolean isCorrect,
        AdminTask adminTask,
        File instruction_user_excel,
        File submission_excel,
        User user
    ) {
        UserTask userTask = userTaskRepository.getById(id);
        // delete the old submission file
        if (userTask.getSubmission_excel() != submission_excel && userTask.getSubmission_excel() != null) {
            fileRepository.deleteById(userTask.getSubmission_excel().getId());
        }
        userTask.setCorrect(isCorrect);
        userTask.setAdminTask(adminTask);
        userTask.setInstruction_user_excel(instruction_user_excel);
        userTask.setSubmission_excel(submission_excel);
        userTask.setUser(user);
        userTaskRepository.save(userTask);
        logger.debug("Updated User Task: {}", userTask);
        return userTask;
    }


    @Transactional
    public UserTask setUserTaskCorrect(long id) {
        UserTask userTask = userTaskRepository.getById(id);
        userTask.setCorrect(true);
        userTaskRepository.save(userTask);
        return userTask;
    }


    @Transactional(readOnly = true)
    public UserTaskDTO getUserTaskMetaData(long id) throws UserTaskDoesNotExistException {
        try {
            return userTaskRepository.getMetaDataOfUserTask(id);
        } catch (UserTaskDoesNotExistException e) {
            return null;
        }
    }

    @Transactional(readOnly = true)
    public Page<UserTaskDTO> getUserTasksMetaData(Pageable pageable) throws UserTaskDoesNotExistException {
        List<UserTask> userTaskList = userTaskRepository.findAll();
        List<UserTaskDTO> userTaskDTOS = new ArrayList<>();
        for (UserTask userTask : userTaskList) {
            userTaskDTOS.add(getUserTaskMetaData(userTask.getId()));
        }
        return new PageImpl<>(userTaskDTOS, pageable, userTaskDTOS.size());
    }

    @Transactional(readOnly = true)
    public Double getSolvedExercises (Long id) {
        int solved_exercises = 0;
        List<UserTask> userTaskList = userTaskRepository.findAll();
        for (UserTask userTask : userTaskList) {
            if (Objects.equals(userTask.getUser().getId(), id)) {
                if (userTask.isCorrect()) {
                    solved_exercises += 1;
                }
            }
        }
        int number_exercises = adminTaskRepository.findAll().size();
        if (number_exercises == 0) {
            return 0.0;
        }
        double returning = solved_exercises * 1.0 / number_exercises * 100.00;
        return Math.round(returning * 100.0)/100.0;
    }
}
