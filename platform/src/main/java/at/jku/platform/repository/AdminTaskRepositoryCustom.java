package at.jku.platform.repository;

import at.jku.platform.service.dto.AdminTaskDTO;
import at.jku.platform.web.rest.errors.AdminTaskDoesNotExistException;

public interface AdminTaskRepositoryCustom {
    AdminTaskDTO getMetaDataOfAdminTask(long id) throws AdminTaskDoesNotExistException;
}
