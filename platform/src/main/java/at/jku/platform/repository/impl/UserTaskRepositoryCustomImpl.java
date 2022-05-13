package at.jku.platform.repository.impl;

import at.jku.platform.repository.UserTaskRepositoryCustom;
import at.jku.platform.service.dto.AdminTaskDTO;
import at.jku.platform.service.dto.UserTaskDTO;
import at.jku.platform.web.rest.errors.AdminTaskDoesNotExistException;
import at.jku.platform.web.rest.errors.UserTaskDoesNotExistException;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@SuppressWarnings("unused")
public class UserTaskRepositoryCustomImpl implements UserTaskRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public UserTaskDTO getMetaDataOfUserTask(long id) throws UserTaskDoesNotExistException {
        TypedQuery<UserTaskDTO> query = entityManager.createQuery(
            """
    SELECT new at.jku.platform.service.dto.UserTaskDTO(
    u.id, u.isCorrect, u.adminTask.id, u.adminTask.name, u.adminTask.instruction_excel.id, u.adminTask.instruction_pdf.id, u.adminTask.solution_excel.id, u.submission_excel.id, u.user.id )
    FROM UserTask u WHERE u.id = :id
""",
            UserTaskDTO.class
        );
        query.setParameter("id", id);

        try {
            return query.getSingleResult();
        } catch (NoResultException nre) {
            throw new UserTaskDoesNotExistException();
        }
    }
}
