package at.jku.platform.web.rest.errors;

import java.io.Serial;

public class FileStorageException extends BadRequestAlertException {

    @Serial
    private static final long serialVersionUID = 1L;

    /**
     * Constructor.
     */
    public FileStorageException() {
        super("A file storage problem occurred!", "courseManagement", "fileStorage");
    }
}
