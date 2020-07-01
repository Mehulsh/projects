
import com.sun.speech.freetts.Voice;
import com.sun.speech.freetts.VoiceManager;
import java.awt.Color;
import javax.swing.JOptionPane;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author HP
 */
public class start_loading extends Thread {
    
     Voice k;
    
    start_loading(Voice k)
    {
        this.k=k;
    }
    
    public void run()
    {
        try {
            
            k.speak("Please wait!!! browser is loading");
        } catch (Exception ex) {
           ex.printStackTrace();
        }
    }

    public static void main(String s[]) {

        Voice voice;
        VoiceManager vm = VoiceManager.getInstance();
        voice = vm.getVoice("kevin16");

        voice.allocate();

        
        loading ld=new loading();
        ld.setVisible(true);
        ld.setLocation(600, 200);
        
         start_loading t1=new start_loading(voice);
       
          t1.start();

        try {
            for (int i = 0; i <= 100; i++) {
                Thread.sleep(50);
                if (i % 2 == 0) {
                    ld.loading_label.setForeground(Color.BLUE);

                    ld.loading_no.setForeground(Color.blue);
                    ld.loading_bar.setForeground(Color.red);

                } else {
                    ld.loading_label.setForeground(Color.PINK);
                    ld.loading_no.setForeground(Color.GREEN);
                    ld.loading_bar.setForeground(Color.CYAN);
                }
                ld.loading_no.setText(Integer.toString(i) + "%");

                ld.loading_bar.setValue(i);
                if (i == 100) {
                    Thread.sleep(50);
                    ld.setVisible(false);
                    start st=new start(voice);
                  
                }
            }
        } catch (Exception e) {
          
            e.printStackTrace();
        }

    }

}
