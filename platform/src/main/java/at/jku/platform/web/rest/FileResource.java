package at.jku.platform.web.rest;

import at.jku.platform.domain.File;
import at.jku.platform.domain.User;
import at.jku.platform.security.AuthoritiesConstants;
import at.jku.platform.security.SecurityUtils;
import at.jku.platform.service.FileService;
import at.jku.platform.service.UserService;
import at.jku.platform.service.dto.FileDTO;
import at.jku.platform.web.rest.errors.EmptyFileNotAllowedException;
import at.jku.platform.web.rest.errors.FileNotExistsException;
import at.jku.platform.web.rest.errors.FileStorageException;
import at.jku.platform.web.rest.errors.UserExtraNotExistsException;
import java.io.IOException;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.testcontainers.shaded.com.google.common.net.UrlEscapers;

@RestController
@RequestMapping("/api/files")
public class FileResource {

    private final FileService fileService;
    private final UserService userService;

    public FileResource(FileService fileService, UserService userService) {
        this.fileService = fileService;
        this.userService = userService;
    }

    @PostMapping
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<Long> postFile(
        @RequestParam("file") MultipartFile file,
        @RequestParam(value = "fileName", defaultValue = "", required = false) String fileName
    ) throws UserExtraNotExistsException {
        Long user_id = userService.getUserWithAuthorities().get().getId();

        if (file.isEmpty()) {
            throw new EmptyFileNotAllowedException();
        }

        try {
            long id = fileService.uploadFile(user_id, file, fileName);

            return ResponseEntity.ok(id);
        } catch (at.jku.platform.web.rest.errors.UserExtraNotExistsException e) {
            throw new UserExtraNotExistsException();
        } catch (IOException e) {
            throw new FileStorageException();
        }
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<Resource> getFile(@PathVariable long id) throws UserExtraNotExistsException {
        try {
            File file = fileService.getFile(id);

            ByteArrayResource resource = new ByteArrayResource(file.getContent());
            HttpHeaders headers = new HttpHeaders();

            headers.add(
                HttpHeaders.CONTENT_DISPOSITION,
                "attachment;filename=" + UrlEscapers.urlFragmentEscaper().escape(file.getName()).replace(",", "_")
            );
            headers.add(HttpHeaders.CONTENT_TYPE, file.getContentType());
            headers.add("X-Filename", file.getName());
            headers.add("X-Content-Type", file.getContentType());

            return ResponseEntity
                .ok()
                .headers(headers)
                .contentLength(file.getSize())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
        } catch (at.jku.platform.web.rest.errors.FileNotExistsException e) {
            throw new UserExtraNotExistsException();
        }
    }

    /**
     * Returns the request file's meta data.
     *
     * @param id the file id
     * @return {@link ResponseEntity} containing the meta data dto
     */
    @GetMapping("{id}/metadata")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.ADMIN + "\", \"" + AuthoritiesConstants.USER + "\")")
    public ResponseEntity<FileDTO> getFileMetaData(@PathVariable long id) throws FileNotExistsException {
        return ResponseEntity.of(fileService.getFileMetaData(id));
    }

    /**
     * REST endpoint for removing files.
     *
     * @param id the internal file id
     * @return empty {@link ResponseEntity}
     */
    @DeleteMapping("{id}")
    @PreAuthorize("hasAnyAuthority(\"" + AuthoritiesConstants.USER + "\", \"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<Void> deleteFile(@PathVariable long id) {
        fileService.removeFile(id);
        return ResponseEntity.noContent().build();
    }
}
