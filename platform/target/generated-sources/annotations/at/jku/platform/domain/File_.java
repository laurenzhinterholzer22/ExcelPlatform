package at.jku.platform.domain;

import java.time.LocalDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(File.class)
public abstract class File_ {

	public static volatile SingularAttribute<File, LocalDateTime> submitTime;
	public static volatile SingularAttribute<File, Long> size;
	public static volatile SingularAttribute<File, String> name;
	public static volatile SingularAttribute<File, Long> id;
	public static volatile SingularAttribute<File, String> contentType;
	public static volatile SingularAttribute<File, User> user;
	public static volatile SingularAttribute<File, byte[]> content;

	public static final String SUBMIT_TIME = "submitTime";
	public static final String SIZE = "size";
	public static final String NAME = "name";
	public static final String ID = "id";
	public static final String CONTENT_TYPE = "contentType";
	public static final String USER = "user";
	public static final String CONTENT = "content";

}

