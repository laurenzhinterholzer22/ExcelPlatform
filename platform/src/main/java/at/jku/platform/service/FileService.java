package at.jku.platform.service;

import at.jku.platform.domain.File;
import at.jku.platform.repository.FileRepository;
import at.jku.platform.service.dto.FileDTO;
import at.jku.platform.web.rest.errors.FileNotExistsException;
import at.jku.platform.web.rest.errors.UserExtraNotExistsException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;
import javax.swing.text.html.Option;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class FileService {

    private final FileRepository fileRepository;

    public FileService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
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
}
