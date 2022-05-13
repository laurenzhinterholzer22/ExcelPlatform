package at.jku.platform.service;

import at.jku.platform.domain.AdminTask;
import at.jku.platform.domain.File;
import at.jku.platform.repository.AdminTaskRepository;
import at.jku.platform.service.dto.AdminTaskDTO;
import at.jku.platform.web.rest.errors.AdminTaskDoesNotExistException;
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
public class AdminTaskService {

    private final Logger logger = LoggerFactory.getLogger(AdminTaskService.class);

    private final AdminTaskRepository adminTaskRepository;

    public AdminTaskService(AdminTaskRepository adminTaskRepository) {
        this.adminTaskRepository = adminTaskRepository;
    }

    @Transactional(readOnly = true)
    public Page<AdminTask> getAdminTasks(Pageable pageable) {
        return adminTaskRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    public Optional<AdminTask> getAdminTask(long id) {
        return adminTaskRepository.findById(id);
    }

    @Transactional
    public void removeAdminTask(long id) {
        adminTaskRepository.deleteById(id);
    }

    @Transactional
    public void addAdminTask(String name, File instruction_excel, File instruction_pdf, File solution_excel) {
        AdminTask adminTask = new AdminTask();
        adminTask.setName(name);
        adminTask.setInstruction_excel(instruction_excel);
        adminTask.setInstruction_pdf(instruction_pdf);
        adminTask.setSolution_excel(solution_excel);
        adminTaskRepository.save(adminTask);
        logger.debug("Added new Admin Task: {}", adminTask);
    }

    @Transactional(readOnly = true)
    public AdminTaskDTO getAdminTaskMetaData(long id) throws AdminTaskDoesNotExistException {
        try {
            return adminTaskRepository.getMetaDataOfAdminTask(id);
        } catch (AdminTaskDoesNotExistException e) {
            return null;
        }
    }

    @Transactional(readOnly = true)
    public Page<AdminTaskDTO> getAdminTasksMetaData(Pageable pageable) throws AdminTaskDoesNotExistException {
        List<AdminTask> adminTaskList = adminTaskRepository.findAll();
        List<AdminTaskDTO> adminTaskDTOS = new ArrayList<>();
        for (AdminTask adminTask : adminTaskList) {
            adminTaskDTOS.add(getAdminTaskMetaData(adminTask.getId()));
        }
        return new PageImpl<>(adminTaskDTOS, pageable, adminTaskDTOS.size());
    }
}
