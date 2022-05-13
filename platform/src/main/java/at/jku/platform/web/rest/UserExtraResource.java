package at.jku.platform.web.rest;

import at.jku.platform.config.Constants;
import at.jku.platform.repository.UserExtraRepository;
import at.jku.platform.security.AuthoritiesConstants;
import at.jku.platform.service.UserExtraService;
import at.jku.platform.service.dto.AdminUserDTO;
import at.jku.platform.service.dto.AdminUserExtraDTO;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import javax.validation.constraints.Pattern;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

@RestController
@RequestMapping("/api/admin")
public class UserExtraResource {

    //    private static final List<String> ALLOWED_ORDERED_PROPERTIES = Collections.unmodifiableList(
    //        Arrays.asList(
    //            "id",
    //            "solved_exercises",
    //            "user"
    //        )
    //    );
    //
    private final Logger logger = LoggerFactory.getLogger(UserExtraResource.class);

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final UserExtraService userExtraService;

    private final UserExtraRepository userExtraRepository;

    public UserExtraResource(UserExtraService userExtraService, UserExtraRepository userExtraRepository) {
        this.userExtraService = userExtraService;
        this.userExtraRepository = userExtraRepository;
    }

    @GetMapping("/userExtras")
    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<List<AdminUserExtraDTO>> getAllUserExtras(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        logger.debug("REST request to get all UserExtra for an admin");
        final Page<AdminUserExtraDTO> page = userExtraService.getExtraUsers(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    @GetMapping("/userExtras/{id}")
    @PreAuthorize("hasAuthority(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<AdminUserExtraDTO> getUserExtra(@PathVariable @Pattern(regexp = Constants.LOGIN_REGEX) Long id) {
        logger.debug("REST request to get a UserExtra for an admin with id");
        return ResponseUtil.wrapOrNotFound(userExtraService.getExtraUser(id));
    }
}
