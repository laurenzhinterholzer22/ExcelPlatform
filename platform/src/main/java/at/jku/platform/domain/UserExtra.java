package at.jku.platform.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import javax.persistence.*;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.hibernate.annotations.*;
import org.hibernate.annotations.Cache;

@Entity
@Table(name = "user_extra")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class UserExtra implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "user_extra_id")
    private Long id;

    @Column(name = "solved_exercises")
    private Integer solved_exercises;

    // the cascade is not being noticed (I don't know why)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
