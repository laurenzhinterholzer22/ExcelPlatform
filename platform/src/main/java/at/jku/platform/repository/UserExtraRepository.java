package at.jku.platform.repository;

import at.jku.platform.domain.UserExtra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface UserExtraRepository extends JpaRepository<UserExtra, Long> {}
