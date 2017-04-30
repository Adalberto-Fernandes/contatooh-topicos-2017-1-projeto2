function mascara(t, mask){
 	var i = t.value.length;
 	var saida = mask.substring(1,0);
 	var texto = mask.substring(i)
 	if (texto.substring(0,1) != saida){
 		t.value += texto.substring(0,1);
 	}
 }

public class So_numeros extends PlainDocument{
    @Override
    public void insertString(int offset,String str, javax.swing.text.AttributeSet atr)
    throws BadLocationException{
        super.insertString(offset, str.replaceAll("[^0-9]",""), atr);
    }
    public void replace(int offset,String str, javax.swing.text.AttributeSet atr)
    throws BadLocationException{
        super.insertString(offset, str.replaceAll("[^0-9]",""), atr);
    }
}