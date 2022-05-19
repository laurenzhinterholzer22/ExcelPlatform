package at.jku.platform.correction;


import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Color;
import org.apache.poi.xssf.usermodel.XSSFColor;

public class FillColorHex {

    public static String getFillColorHex(Cell cell) throws Exception {
        //[255, 146, 208, 80] -> green
        // [255, 255, 0, 0] -> red
        String fillColorString = "none";
        if (cell != null) {
            CellStyle cellStyle = cell.getCellStyle();
            Color color =  cellStyle.getFillForegroundColorColor();
            if (color instanceof XSSFColor) {
                XSSFColor xssfColor = (XSSFColor)color;
                byte[] argb = xssfColor.getARgb();
                fillColorString = "[" + (argb[0]&0xFF) + ", " + (argb[1]&0xFF) + ", " + (argb[2]&0xFF) + ", " + (argb[3]&0xFF) + "]";
                if (xssfColor.getTint() != 0) {
                    fillColorString += " * " + xssfColor.getTint();
                    byte[] rgb = xssfColor.getRgbWithTint();
                    fillColorString += " = [" + (argb[0]&0xFF) + ", " + (rgb[0]&0xFF) + ", " + (rgb[1]&0xFF) + ", " + (rgb[2]&0xFF) + "]" ;
                }
            } else if (color instanceof HSSFColor) {
                HSSFColor hssfColor = (HSSFColor)color;
                short[] rgb = hssfColor.getTriplet();
                fillColorString = "[" + rgb[0] + ", " + rgb[1] + ", "  + rgb[2] + "]";
            }
        }
        return fillColorString;
    }
}
