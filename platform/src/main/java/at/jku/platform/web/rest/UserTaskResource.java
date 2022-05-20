package at.jku.platform.web.rest;

import at.jku.platform.domain.User;
import at.jku.platform.domain.UserTask;
import at.jku.platform.repository.UserTaskRepository;
import at.jku.platform.security.AuthoritiesConstants;
import at.jku.platform.service.UserTaskService;
import at.jku.platform.service.dto.UserTaskDTO;
import at.jku.platform.web.rest.errors.UserTaskDoesNotExistException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import javax.swing.text.html.Option;
import javax.validation.Valid;
import org.mapstruct.control.MappingControl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

@RestController
@RequestMapping("/api")
public class UserTaskResource {

    private final UserTaskService userTaskService;
    private final UserTaskRepository userTaskRepository;

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    public UserTaskResource(UserTaskService userTaskService, UserTaskRepository userTaskRepository) {
        this.userTaskService = userTaskService;
        this.userTaskRepository = userTaskRepository;
    }

    @PostMapping("/user_task")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<UserTask> createUserTask(@Valid @RequestBody UserTask userTask) throws URISyntaxException {
         UserTask newUserTask = userTaskService.addUserTask(
            userTask.getUser(),
            userTask.getAdminTask(),
            userTask.getInstruction_user_excel(),
            userTask.getSubmission_excel(),
            userTask.isCorrect()
        );
        return ResponseEntity
            .created(new URI(""))
//            .headers(HeaderUtil.createAlert(applicationName, "User Task created", userTask.getUser().getId().toString()))
            .body(newUserTask);

    }

    @GetMapping("/user_task")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<List<UserTask>> getAllUserTasks(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        final Page<UserTask> page = userTaskService.getUserTasks(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    @GetMapping("/user_task/{id}")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<UserTask> getUserTask(@PathVariable Long id) {
        return ResponseUtil.wrapOrNotFound(userTaskService.getUserTask(id));
    }

    @GetMapping("/user_task_meta")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<List<UserTaskDTO>> getAllUserTasksMeta(@org.springdoc.api.annotations.ParameterObject Pageable pageable)
        throws UserTaskDoesNotExistException {
        final Page<UserTaskDTO> page = userTaskService.getUserTasksMetaData(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }



    @PutMapping("/user_task")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<UserTask> updateUserTask(@Valid @RequestBody UserTask userTask) {
        Optional<UserTask> updatedUserTask = Optional.ofNullable(
            userTaskService.updateUserTask(
                userTask.getId(),
                userTask.isCorrect(),
                userTask.getAdminTask(),
                userTask.getInstruction_user_excel(),
                userTask.getSubmission_excel(),
                userTask.getUser()
            )
        );
        return ResponseUtil.wrapOrNotFound(updatedUserTask);
    }

    @GetMapping("/user_task/set_correct/{id}")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<UserTask> setUserTaskCorrect(@PathVariable long id) {
        Optional<UserTask> updatedUserTask = Optional.ofNullable(
            userTaskService.setUserTaskCorrect(id)
        );
        return ResponseUtil.wrapOrNotFound(updatedUserTask);
    }

//    @GetMapping("/user_task/solved_exercises/{id}")
//    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
//    public ResponseEntity<Integer> getSolvedExercises(@PathVariable long id) {
//        return ResponseUtil.wrapOrNotFound(userTaskService.getSolvedExercises(id));
//    }




    @DeleteMapping("/user_task/{id}")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<Void> deleteUserTask(@PathVariable Long id) {
        userTaskService.removeUserTask(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createAlert(applicationName, "userTaskManagement.deleted", id.toString()))
            .build();
    }
}
