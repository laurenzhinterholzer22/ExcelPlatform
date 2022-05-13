package at.jku.platform.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "admin_task")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class AdminTask implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "admin_task_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "instruction_excel")
    private File instruction_excel;

    @ManyToOne
    @JoinColumn(name = "instruction_pdf")
    private File instruction_pdf;

    @ManyToOne
    @JoinColumn(name = "solution_excel")
    private File solution_excel;

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

    public File getInstruction_excel() {
        return instruction_excel;
    }

    public void setInstruction_excel(File instruction_excel) {
        this.instruction_excel = instruction_excel;
    }

    public File getInstruction_pdf() {
        return instruction_pdf;
    }

    public void setInstruction_pdf(File instruction_pdf) {
        this.instruction_pdf = instruction_pdf;
    }

    public File getSolution_excel() {
        return solution_excel;
    }

    public void setSolution_excel(File solution_excel) {
        this.solution_excel = solution_excel;
    }
}
