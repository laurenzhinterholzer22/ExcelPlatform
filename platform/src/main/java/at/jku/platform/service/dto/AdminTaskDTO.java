package at.jku.platform.service.dto;

public class AdminTaskDTO {

    private Long id;
    private String name;
    private Long instruction_excel;
    private Long instruction_pdf;
    private Long solution_excel;

    public AdminTaskDTO(Long id, String name, Long instruction_excel, Long instruction_pdf, Long solution_excel) {
        this.id = id;
        this.name = name;
        this.instruction_excel = instruction_excel;
        this.instruction_pdf = instruction_pdf;
        this.solution_excel = solution_excel;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
}
