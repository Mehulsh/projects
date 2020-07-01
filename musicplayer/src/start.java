
import com.sun.speech.freetts.Voice;
import com.sun.speech.freetts.VoiceManager;
import java.awt.Color;
import java.util.logging.Level;
import java.util.logging.Logger;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author HP
 */
public class start extends Thread{
    
    Voice k;
    
    start(Voice k)
    {
        this.k=k;
    }
    
    public void run()
    {
        try {
            
            k.speak("Please wait!!! mp3 player is loading");
            
            Thread.sleep(4000);
            
            k.speak("welcome! to mp3 player ");
        } catch (Exception ex) {
           
        }
    }

    public static void main(String s[]) {

        Voice voice;
        VoiceManager vm = VoiceManager.getInstance();
        voice = vm.getVoice("kevin16");

        voice.allocate();

        loading a = new loading();
        a.setLocation(600, 200);
        a.setVisible(true);
        
        start t1=new start(voice);
        t1.start();
              
        try {
            for (int i = 0; i <= 100; i++) {
                Thread.sleep(50);
                if (i % 2 == 0) {
                    a.jLabel3.setForeground(Color.BLUE);

                    a.jLabel1.setForeground(Color.blue);
                    a.jProgressBar1.setForeground(Color.red);

                } else {
                    a.jLabel3.setForeground(Color.PINK);
                    a.jLabel1.setForeground(Color.GREEN);
                    a.jProgressBar1.setForeground(Color.CYAN);
                }
                a.jLabel1.setText(Integer.toString(i) + "%");

                a.jProgressBar1.setValue(i);
                if (i == 100) {
                    Thread.sleep(50);
                    a.setVisible(false);
                    mp m=new mp();
                    Thread.sleep(30);
                    m.setVisible(true);
                }
            }
        } catch (Exception e) {

        }

    }

}
