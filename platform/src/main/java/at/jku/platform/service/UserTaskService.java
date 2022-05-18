package at.jku.platform.service;

import at.jku.platform.domain.*;
import at.jku.platform.repository.UserTaskRepository;
import at.jku.platform.service.dto.UserTaskDTO;
import at.jku.platform.web.rest.errors.UserTaskDoesNotExistException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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

    public UserTaskService(UserTaskRepository userTaskRepository) {
        this.userTaskRepository = userTaskRepository;
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
        userTaskRepository.deleteById(id);
    }

    @Transactional
    public void addUserTask(User user, AdminTask adminTask, File instruction_user_excel, File submission_excel, boolean isCorrect) {
        UserTask userTask = new UserTask();
        userTask.setUser(user);
        userTask.setAdminTask(adminTask);
        userTask.setInstruction_user_excel(instruction_user_excel);
        userTask.setSubmission_excel(submission_excel);
        userTask.setCorrect(isCorrect);
        userTaskRepository.save(userTask);
        logger.debug("Created new User Task: {}", userTask);
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
        userTaskRepository.deleteById(id);
        userTask.setCorrect(isCorrect);
        userTask.setAdminTask(adminTask);
        userTask.setInstruction_user_excel(instruction_user_excel);
        userTask.setSubmission_excel(submission_excel);
        userTask.setUser(user);
        userTaskRepository.save(userTask);
        logger.debug("Updated User Task: {}", userTask);
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
}
