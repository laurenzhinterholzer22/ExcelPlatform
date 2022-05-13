package at.jku.platform.repository.impl;

import at.jku.platform.domain.File;
import at.jku.platform.domain.User;
import at.jku.platform.domain.UserExtra;
import at.jku.platform.repository.FileRepositoryCustom;
import at.jku.platform.service.dto.FileDTO;
import at.jku.platform.web.rest.errors.FileNotExistsException;
import at.jku.platform.web.rest.errors.UserExtraNotExistsException;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

@SuppressWarnings("unused")
public class FileRepositoryCustomImpl implements FileRepositoryCustom {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public long uploadFile(long user_id, String filename, String contentType, byte[] content, long size, LocalDateTime time)
        throws UserExtraNotExistsException {
        TypedQuery<User> userTypedQuery = entityManager.createQuery("""
    SELECT u FROM User u WHERE u.id = :userid
    """, User.class);
        userTypedQuery.setParameter("userid", user_id);

        User user;

        try {
            user = userTypedQuery.getSingleResult();
        } catch (NoResultException nre) {
            throw new UserExtraNotExistsException();
        }
        File file = new File();
        file.setContent(content);
        file.setContentType(contentType);
        file.setName(filename);
        file.setSize(size);
        file.setUser(user);
        file.setSubmitTime(time);

        entityManager.persist(file);

        return file.getId();
    }

    @Override
    public FileDTO getMetaDataOfFile(long id) throws FileNotExistsException {
        TypedQuery<FileDTO> query = entityManager.createQuery(
            """
    SELECT new at.jku.platform.service.dto.FileDTO(
    f.name, f.contentType, f.submitTime)
    FROM File f WHERE f.id = :id
""",
            FileDTO.class
        );
        query.setParameter("id", id);

        try {
            return query.getSingleResult();
        } catch (NoResultException nre) {
            throw new FileNotExistsException();
        }
    }
}
