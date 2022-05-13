package at.jku.platform.repository.impl;

import at.jku.platform.repository.AdminTaskRepositoryCustom;
import at.jku.platform.service.dto.AdminTaskDTO;
import at.jku.platform.web.rest.errors.AdminTaskDoesNotExistException;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@SuppressWarnings("unused")
public class AdminTaskRepositoryCustomImpl implements AdminTaskRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public AdminTaskDTO getMetaDataOfAdminTask(long id) throws AdminTaskDoesNotExistException {
        TypedQuery<AdminTaskDTO> query = entityManager.createQuery(
            """
    SELECT new at.jku.platform.service.dto.AdminTaskDTO(
    a.id, a.name, a.instruction_excel.id, a.instruction_pdf.id, a.solution_excel.id)
    FROM AdminTask a WHERE a.id = :id
""",
            AdminTaskDTO.class
        );
        query.setParameter("id", id);

        try {
            return query.getSingleResult();
        } catch (NoResultException nre) {
            throw new AdminTaskDoesNotExistException();
        }
    }
}
