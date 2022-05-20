package at.jku.platform.correction;


import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.CellUtil;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


import java.io.File;
import java.io.FileInputStream;
import java.util.Iterator;
import java.util.Objects;


public class CompareExcelFiles {

    public static Boolean correctSolution (XSSFWorkbook solution, XSSFWorkbook submission) {
        try {
//            FileInputStream abgabe = new FileInputStream(new File(abgabe_directory));
//            FileInputStream loesung = new FileInputStream(new File(loesung_directory));
//
//
//            //Create Workbook instance holding reference to .xlsx file
//            XSSFWorkbook workbook_abgabe = new XSSFWorkbook(abgabe);
//            XSSFWorkbook workbook_loesung = new XSSFWorkbook(loesung);

            //Get first/desired sheet from the workbook
            XSSFSheet sheet_abgabe = submission.getSheetAt(0);
            XSSFSheet sheet_loesung = solution.getSheetAt(0);

            //Iterate through each rows one by one
            Iterator<Row> rowIterator_abgabe = sheet_abgabe.iterator();
            Iterator<Row> rowIterator_loesung = sheet_loesung.iterator();



            while (rowIterator_abgabe.hasNext() && rowIterator_loesung.hasNext()) {
                Row row_abgabe = rowIterator_abgabe.next();
                Row row_loesung = rowIterator_loesung.next();
                //For each row, iterate through all the columns
                Iterator<Cell> cellIterator_abgabe = row_abgabe.cellIterator();
                Iterator<Cell> cellIterator_loesung = row_loesung.cellIterator();

                while (cellIterator_abgabe.hasNext() && cellIterator_loesung.hasNext()) {
                    Cell cell_abgabe = cellIterator_abgabe.next();
                    Cell cell_loesung = cellIterator_loesung.next();

                    String color = FillColorHex.getFillColorHex(cell_loesung);

                    try {
                        // Toleranzgrenze von 1% wird akzeptiert
                        if (Objects.equals(color, "[255, 146, 208, 80]") && !(Math.abs(cell_abgabe.getNumericCellValue())* 1.01 >= Math.abs(cell_loesung.getNumericCellValue()) && Math.abs(cell_abgabe.getNumericCellValue()) * 0.99 <= Math.abs(cell_loesung.getNumericCellValue()) )) {
                            return false;
                        }
                    } catch (Exception e) {
                        if (Objects.equals(color, "[255, 146, 208, 80]") && !Objects.equals(cell_abgabe.getStringCellValue(), cell_loesung.getStringCellValue())) {
                            return false;
                        }
                    }

                }
            }
//            abgabe.close();
//            loesung.close();

        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public static String checkZwischenergebnis (XSSFWorkbook solution, XSSFWorkbook submission) {

        StringBuilder info = new StringBuilder();
        try {
//            FileInputStream abgabe = new FileInputStream(new File(abgabe_directory));
//            FileInputStream loesung = new FileInputStream(new File(loesung_directory));
//
//
//            //Create Workbook instance holding reference to .xlsx file
//            XSSFWorkbook workbook_abgabe = new XSSFWorkbook(abgabe);
//            XSSFWorkbook workbook_loesung = new XSSFWorkbook(loesung);
//
//            //Get first/desired sheet from the workbook
//            XSSFSheet sheet_abgabe = workbook_abgabe.getSheetAt(0);
//            XSSFSheet sheet_loesung = workbook_loesung.getSheetAt(0);

            XSSFSheet sheet_abgabe = submission.getSheetAt(0);
            XSSFSheet sheet_loesung = solution.getSheetAt(0);

            //Iterate through each rows one by one
            Iterator<Row> rowIterator_abgabe = sheet_abgabe.iterator();
            Iterator<Row> rowIterator_loesung = sheet_loesung.iterator();



            while (rowIterator_abgabe.hasNext() && rowIterator_loesung.hasNext()) {
                Row row_abgabe = rowIterator_abgabe.next();
                Row row_loesung = rowIterator_loesung.next();
                //For each row, iterate through all the columns
                Iterator<Cell> cellIterator_abgabe = row_abgabe.cellIterator();
                Iterator<Cell> cellIterator_loesung = row_loesung.cellIterator();

                while (cellIterator_abgabe.hasNext() && cellIterator_loesung.hasNext()) {
                    Cell cell_abgabe = cellIterator_abgabe.next();
                    Cell cell_loesung = cellIterator_loesung.next();

                    String color = FillColorHex.getFillColorHex(cell_loesung);

                    try {
                        if (Objects.equals(color, "[255, 255, 0, 0]") && !(cell_abgabe.getNumericCellValue()* 1.01 >= cell_loesung.getNumericCellValue() && cell_abgabe.getNumericCellValue()* 0.99 <= cell_loesung.getNumericCellValue() )) {
                            String false_zw = CellUtil.getCell(cell_loesung.getRow(), cell_loesung.getColumnIndex() - 1).toString();
//                            info.append("Bitte überprüfen Sie ihr Zwischenergebnis: ").append(false_zw).append("\n");
                            return "Abgabe nicht korrekt: Bitte überprüfen Sie ihr Zwischenergebnis " + false_zw;
                        }
                    }catch (Exception e) {
                        if (Objects.equals(color, "[255, 255, 0, 0]") && !Objects.equals(cell_abgabe.getStringCellValue(), cell_loesung.getStringCellValue())) {
                            String false_zw = CellUtil.getCell(cell_loesung.getRow(), cell_loesung.getColumnIndex() - 1).toString();
//                            info.append("Bitte überprüfen Sie ihr Zwischenergebnis: ").append(false_zw).append("\n");
                            return "Abgabe nicht korrekt: Bitte überprüfen Sie ihr Zwischenergebnis " + false_zw;
                        }
                    }

                }
            }
//            abgabe.close();
//            loesung.close();

        } catch (Exception e) {
            return "Ihre Abgabe enthält Syntaxfehler bitte füllen Sie nur die vorgesehenen Zellen aus";
        }
//        return info.toString();
        return "Ihre Abgabe enthält Syntaxfehler bitte füllen Sie nur die vorgesehenen Zellen aus";
    }

    public static String wrongCell (String abgabe_directory, String loesung_directory) {
        try {
            FileInputStream abgabe = new FileInputStream(new File(abgabe_directory));
            FileInputStream loesung = new FileInputStream(new File(loesung_directory));


            //Create Workbook instance holding reference to .xlsx file
            XSSFWorkbook workbook_abgabe = new XSSFWorkbook(abgabe);
            XSSFWorkbook workbook_loesung = new XSSFWorkbook(loesung);

            //Get first/desired sheet from the workbook
            XSSFSheet sheet_abgabe = workbook_abgabe.getSheetAt(0);
            XSSFSheet sheet_loesung = workbook_loesung.getSheetAt(0);

            //Iterate through each rows one by one
            Iterator<Row> rowIterator_abgabe = sheet_abgabe.iterator();
            Iterator<Row> rowIterator_loesung = sheet_loesung.iterator();



            while (rowIterator_abgabe.hasNext() && rowIterator_loesung.hasNext()) {
                Row row_abgabe = rowIterator_abgabe.next();
                Row row_loesung = rowIterator_loesung.next();
                //For each row, iterate through all the columns
                Iterator<Cell> cellIterator_abgabe = row_abgabe.cellIterator();
                Iterator<Cell> cellIterator_loesung = row_loesung.cellIterator();

                while (cellIterator_abgabe.hasNext() && cellIterator_loesung.hasNext()) {
                    Cell cell_abgabe = cellIterator_abgabe.next();
                    Cell cell_loesung = cellIterator_loesung.next();

                    String color = FillColorHex.getFillColorHex(cell_loesung);

                    try {

                        if (Objects.equals(color, "[255, 146, 208, 80]") && !(cell_abgabe.getNumericCellValue()* 1.01 >= cell_loesung.getNumericCellValue() && cell_abgabe.getNumericCellValue()* 0.99 <= cell_loesung.getNumericCellValue() )) {
                            return "Abgabe: " + cell_abgabe.getNumericCellValue() + " Loesung: " + cell_loesung.getNumericCellValue();
                        }
                    } catch (Exception e) {
                        if (Objects.equals(color, "[255, 146, 208, 80]") && !Objects.equals(cell_abgabe.getStringCellValue(), cell_loesung.getStringCellValue())) {
                            return "Abgabe: " + cell_abgabe.getStringCellValue() + " Loesung: " + cell_loesung.getStringCellValue();
                        }
                    }

                }
            }
            abgabe.close();
            loesung.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return " ";
    }

}
