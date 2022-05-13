package at.jku.platform.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(AdminTask.class)
public abstract class AdminTask_ {

	public static volatile SingularAttribute<AdminTask, File> instruction_pdf;
	public static volatile SingularAttribute<AdminTask, File> solution_excel;
	public static volatile SingularAttribute<AdminTask, File> instruction_excel;
	public static volatile SingularAttribute<AdminTask, String> name;
	public static volatile SingularAttribute<AdminTask, Long> id;

	public static final String INSTRUCTION_PDF = "instruction_pdf";
	public static final String SOLUTION_EXCEL = "solution_excel";
	public static final String INSTRUCTION_EXCEL = "instruction_excel";
	public static final String NAME = "name";
	public static final String ID = "id";

}

