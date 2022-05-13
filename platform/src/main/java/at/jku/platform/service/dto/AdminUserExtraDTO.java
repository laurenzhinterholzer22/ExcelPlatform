package at.jku.platform.service.dto;

import at.jku.platform.domain.UserExtra;

public class AdminUserExtraDTO {

    private Long id;

    private Integer solved_exercises;

    private AdminUserDTO adminUserDTO;

    public AdminUserExtraDTO(UserExtra userExtra) {
        this.id = userExtra.getId();
        this.solved_exercises = userExtra.getSolved_exercises();
        this.adminUserDTO = new AdminUserDTO();
        this.adminUserDTO.setId(userExtra.getId());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getSolved_exercises() {
        return solved_exercises;
    }

    public void setSolved_exercises(Integer solved_exercises) {
        this.solved_exercises = solved_exercises;
    }

    public AdminUserDTO getAdminUserDTO() {
        return adminUserDTO;
    }

    public void setAdminUserDTO(AdminUserDTO adminUserDTO) {
        this.adminUserDTO = adminUserDTO;
    }
}
