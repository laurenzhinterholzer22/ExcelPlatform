package at.jku.platform.repository;

import at.jku.platform.service.dto.UserTaskDTO;
import at.jku.platform.web.rest.errors.UserTaskDoesNotExistException;

public interface UserTaskRepositoryCustom {
    UserTaskDTO getMetaDataOfUserTask(long id) throws UserTaskDoesNotExistException;
}
