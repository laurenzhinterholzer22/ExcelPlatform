package at.jku.platform.service;

import at.jku.platform.domain.File;
import at.jku.platform.domain.UserTask;
import at.jku.platform.repository.FileRepository;
import at.jku.platform.repository.UserTaskRepository;
import at.jku.platform.service.dto.FileDTO;
import at.jku.platform.web.rest.errors.FileNotExistsException;
import at.jku.platform.web.rest.errors.UserExtraNotExistsException;
import at.jku.platform.correction.CompareExcelFiles;
import at.jku.platform.correction.FillColorHex;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;
import javax.swing.text.html.Option;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class FileService {

    private final FileRepository fileRepository;
    private final UserTaskRepository userTaskRepository;

    public FileService(FileRepository fileRepository, UserTaskRepository userTaskRepository) {
        this.fileRepository = fileRepository;
        this.userTaskRepository = userTaskRepository;
    }

    @Transactional
    public long uploadFile(long user_id, MultipartFile file, String filename) throws IOException, UserExtraNotExistsException {
        Objects.requireNonNull(file);

        String fileNameStr = filename;

        if (ObjectUtils.isEmpty(fileNameStr)) {
            fileNameStr = file.getOriginalFilename();
        }
        String name = StringUtils.cleanPath(Objects.requireNonNull(fileNameStr));
        return fileRepository.uploadFile(user_id, name, file.getContentType(), file.getBytes(), file.getSize(), LocalDateTime.now());
    }

    @Transactional(readOnly = true)
    public File getFile(long fileId) throws FileNotExistsException {
        Optional<File> file = fileRepository.findById(fileId);

        if (file.isPresent()) {
            return file.get();
        }
        throw new FileNotExistsException();
    }

    @Transactional
    public void removeFile(long fileId) {
        fileRepository.deleteById(fileId);
    }

    public Optional<FileDTO> getFileMetaData(long fileId) throws FileNotExistsException {
        try {
            return Optional.of(fileRepository.getMetaDataOfFile(fileId));
        } catch (FileNotExistsException e) {
            return Optional.empty();
        }
    }


    public String correctFile(long id) {
        UserTask userTask = userTaskRepository.getById(id);
        File submission = userTask.getSubmission_excel();
        File solution = userTask.getAdminTask().getSolution_excel();
        try  {
            InputStream stream_solution = new ByteArrayInputStream(solution.getContent());
            InputStream stream_submission = new ByteArrayInputStream(submission.getContent());
            XSSFWorkbook workbook_solution = new XSSFWorkbook(stream_solution);
            XSSFWorkbook workbook_submission = new XSSFWorkbook(stream_submission);

            if (CompareExcelFiles.correctSolution(workbook_solution,workbook_submission)) {
                return "Berechnung korrekt";
            }
            else {
                return CompareExcelFiles.checkZwischenergebnis(workbook_solution, workbook_submission);
            }

            } catch (Exception e) {
                e.printStackTrace();
                return "";
            }
    }
}
