package at.jku.platform.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(UserExtra.class)
public abstract class UserExtra_ {

	public static volatile SingularAttribute<UserExtra, Long> id;
	public static volatile SingularAttribute<UserExtra, Integer> solved_exercises;
	public static volatile SingularAttribute<UserExtra, User> user;

	public static final String ID = "id";
	public static final String SOLVED_EXERCISES = "solved_exercises";
	public static final String USER = "user";

}

