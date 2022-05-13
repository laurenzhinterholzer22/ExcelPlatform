package at.jku.platform.service.dto;

import java.time.LocalDateTime;

public class FileDTO {

    private String fileName;
    private String contentType;
    private LocalDateTime submissionDate;

    public FileDTO() {}

    public FileDTO(String fileName, String contentType, LocalDateTime submissionDate) {
        this.fileName = fileName;
        this.contentType = contentType;
        this.submissionDate = submissionDate;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public LocalDateTime getSubmissionDate() {
        return submissionDate;
    }

    public void setSubmissionDate(LocalDateTime submissionDate) {
        this.submissionDate = submissionDate;
    }
}
