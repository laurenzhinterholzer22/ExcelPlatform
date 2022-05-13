package at.jku.platform.service.dto;

public class UserTaskDTO {

    private Long id;
    private boolean is_correct;
    private Long admin_task_id;
    private String admin_task_name;
    private Long instruction_excel;
    private Long instruction_pdf;
    private Long solution_excel;
    private Long submission_excel;
    private Long user_id;

    public UserTaskDTO(
        Long id,
        boolean is_correct,
        Long admin_task_id,
        String admin_task_name,
        Long instruction_excel,
        Long instruction_pdf,
        Long solution_excel,
        Long submission_excel,
        Long user_id
    ) {
        this.id = id;
        this.is_correct = is_correct;
        this.admin_task_id = admin_task_id;
        this.admin_task_name = admin_task_name;
        this.instruction_excel = instruction_excel;
        this.instruction_pdf = instruction_pdf;
        this.solution_excel = solution_excel;
        this.submission_excel = submission_excel;
        this.user_id = user_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isCorrect() {
        return is_correct;
    }

    public void setCorrect(boolean correct) {
        is_correct = correct;
    }

    public Long getInstruction_excel() {
        return instruction_excel;
    }

    public void setInstruction_excel(Long instruction_excel) {
        this.instruction_excel = instruction_excel;
    }

    public Long getInstruction_pdf() {
        return instruction_pdf;
    }

    public void setInstruction_pdf(Long instruction_pdf) {
        this.instruction_pdf = instruction_pdf;
    }

    public Long getSolution_excel() {
        return solution_excel;
    }

    public void setSolution_excel(Long solution_excel) {
        this.solution_excel = solution_excel;
    }

    public Long getSubmission_excel() {
        return submission_excel;
    }

    public void setSubmission_excel(Long submission_excel) {
        this.submission_excel = submission_excel;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getAdmin_task_id() {
        return admin_task_id;
    }

    public void setAdmin_task_id(Long admin_task_id) {
        this.admin_task_id = admin_task_id;
    }

    public String getAdmin_task_name() {
        return admin_task_name;
    }

    public void setAdmin_task_name(String admin_task_name) {
        this.admin_task_name = admin_task_name;
    }

    public boolean isIs_correct() {
        return is_correct;
    }

    public void setIs_correct(boolean is_correct) {
        this.is_correct = is_correct;
    }
}
