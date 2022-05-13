package at.jku.platform.web.rest.errors;

import java.io.Serial;

public class EmptyFileNotAllowedException extends BadRequestAlertException {

    @Serial
    private static final long serialVersionUID = 1L;

    /**
     * Constructor.
     */
    public EmptyFileNotAllowedException() {
        super("An empty file is not allowed!", "courseManagement", "emptyFileNotAllowed");
    }
}
