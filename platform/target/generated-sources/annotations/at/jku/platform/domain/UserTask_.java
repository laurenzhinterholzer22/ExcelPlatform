package at.jku.platform.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(UserTask.class)
public abstract class UserTask_ {

	public static volatile SingularAttribute<UserTask, File> instruction_user_excel;
	public static volatile SingularAttribute<UserTask, AdminTask> adminTask;
	public static volatile SingularAttribute<UserTask, Long> id;
	public static volatile SingularAttribute<UserTask, User> user;
	public static volatile SingularAttribute<UserTask, Boolean> isCorrect;
	public static volatile SingularAttribute<UserTask, File> submission_excel;

	public static final String INSTRUCTION_USER_EXCEL = "instruction_user_excel";
	public static final String ADMIN_TASK = "adminTask";
	public static final String ID = "id";
	public static final String USER = "user";
	public static final String IS_CORRECT = "isCorrect";
	public static final String SUBMISSION_EXCEL = "submission_excel";

}

