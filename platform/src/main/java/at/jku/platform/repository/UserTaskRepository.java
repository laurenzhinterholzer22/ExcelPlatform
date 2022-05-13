package at.jku.platform.repository;

import at.jku.platform.domain.UserTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface UserTaskRepository extends JpaRepository<UserTask, Long>, UserTaskRepositoryCustom {}
