package at.jku.platform.repository;

import at.jku.platform.service.dto.FileDTO;
import at.jku.platform.web.rest.errors.FileNotExistsException;
import at.jku.platform.web.rest.errors.UserExtraNotExistsException;
import java.time.LocalDateTime;

public interface FileRepositoryCustom {
    long uploadFile(long user_id, String filename, String contentType, byte[] content, long size, LocalDateTime time)
        throws UserExtraNotExistsException;
    FileDTO getMetaDataOfFile(long id) throws FileNotExistsException;
}
