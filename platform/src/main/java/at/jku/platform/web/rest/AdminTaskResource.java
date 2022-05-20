package at.jku.platform.web.rest;

import at.jku.platform.domain.AdminTask;
import at.jku.platform.security.AuthoritiesConstants;
import at.jku.platform.service.AdminTaskService;
import at.jku.platform.service.dto.AdminTaskDTO;
import at.jku.platform.web.rest.errors.AdminTaskDoesNotExistException;
import java.util.List;
import javax.validation.Valid;
import org.intellij.lang.annotations.Pattern;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Constants;
import org.springframework.core.io.Resource;
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
@RequestMapping("/api/admin")
public class AdminTaskResource {

    public final AdminTaskService adminTaskService;

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    public AdminTaskResource(AdminTaskService adminTaskService) {
        this.adminTaskService = adminTaskService;
    }

    @PostMapping("/admin_task")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<AdminTask> createAdminTask(@Valid @RequestBody AdminTask adminTask) {
        adminTaskService.addAdminTask(
            adminTask.getName(),
            adminTask.getInstruction_excel(),
            adminTask.getInstruction_pdf(),
            adminTask.getSolution_excel()
        );
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createAlert(applicationName, "AdminTask created", adminTask.getName()))
            .build();
    }

    @GetMapping("/admin_task")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<List<AdminTask>> getAllAdminTasks(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        final Page<AdminTask> page = adminTaskService.getAdminTasks(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    @GetMapping("/admin_task_meta")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<List<AdminTaskDTO>> getAllAdminTasksMeta(@org.springdoc.api.annotations.ParameterObject Pageable pageable) throws AdminTaskDoesNotExistException {
        final Page<AdminTaskDTO> page = adminTaskService.getAdminTasksMetaData(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    @GetMapping("/admin_task/{id}")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<AdminTask> getAdminTask(@PathVariable Long id) {
        return ResponseUtil.wrapOrNotFound(adminTaskService.getAdminTask(id));
    }

    @DeleteMapping("/admin_task/{id}")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<Void> deleteAdminTask(@PathVariable Long id) {
        adminTaskService.removeAdminTask(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createAlert(applicationName, "AdminTask deleted", id.toString()))
            .build();
    }
}
