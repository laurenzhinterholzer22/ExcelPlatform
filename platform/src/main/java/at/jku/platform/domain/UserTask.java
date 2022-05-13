package at.jku.platform.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Table(name = "user_task")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class UserTask implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "user_task_id")
    private Long id;

    private boolean isCorrect;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "admin_task", referencedColumnName = "admin_task_id")
    private AdminTask adminTask;

    @ManyToOne
    @JoinColumn(name = "instruction_user_excel")
    private File instruction_user_excel;

    @ManyToOne
    @JoinColumn(name = "submission_excel")
    private File submission_excel;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }

    public AdminTask getAdminTask() {
        return adminTask;
    }

    public void setAdminTask(AdminTask adminTask) {
        this.adminTask = adminTask;
    }

    public File getInstruction_user_excel() {
        return instruction_user_excel;
    }

    public void setInstruction_user_excel(File instruction_user_excel) {
        this.instruction_user_excel = instruction_user_excel;
    }

    public File getSubmission_excel() {
        return submission_excel;
    }

    public void setSubmission_excel(File submission_excel) {
        this.submission_excel = submission_excel;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
