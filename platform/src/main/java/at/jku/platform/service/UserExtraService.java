package at.jku.platform.service;

import at.jku.platform.repository.UserExtraRepository;
import at.jku.platform.service.dto.AdminUserExtraDTO;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserExtraService {

    private final Logger log = LoggerFactory.getLogger(UserExtraService.class);

    private final UserExtraRepository userExtraRepository;

    public UserExtraService(UserExtraRepository userExtraRepository) {
        this.userExtraRepository = userExtraRepository;
    }

    @Transactional(readOnly = true)
    public Page<AdminUserExtraDTO> getExtraUsers(Pageable pageable) {
        return userExtraRepository.findAll(pageable).map(AdminUserExtraDTO::new);
    }

    @Transactional(readOnly = true)
    public Optional<AdminUserExtraDTO> getExtraUser(long id) {
        return userExtraRepository.findById(id).map(AdminUserExtraDTO::new);
    }

    public void addSolvedExercise(Long id) {
        userExtraRepository.findById(id).get().setSolved_exercises(userExtraRepository.findById(id).get().getSolved_exercises() + 1);
    }
}
