package pizzeria.lafamiglia.MiController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import pizzeria.lafamiglia.*;
@RestController
//@CrossOrigin(origins = "*")
public class PostreController {

        ArrayList<Postre> postres;
        public PostreController() {
                postres = new ArrayList<Postre>();

        Postre tiramisu = new Postre("Tarta de Tiramisu", 3.40,

                "Especialidad de la Casa",
                "https://i.postimg.cc/CKbdTBB1/tiramisu.jpg");
        Postre BrownieDeChocolate = new Postre("Brownie de Chocolate", 2.30,
                "Saborea el intenso sabor a Chocolate",
                "https://i.postimg.cc/zD7bGgdH/brownie.jpg");
        Postre Pannacota = new Postre("Pannacota", 2,
                "Un postre delicioso para degustar",
                "https://i.postimg.cc/CxXfVpcv/pannacota.jpg");
        Postre TartaIchigo = new Postre("Tarta Ichigo", 6,
                "Un bizococho de Nata y Fresas",
                "https://i.postimg.cc/8z0LP6zm/ichigo.jpg");

        postres.add(tiramisu);
        postres.add(BrownieDeChocolate);
        postres.add(Pannacota);
        postres.add(TartaIchigo);

    }




@GetMapping("/api/postres")
public ArrayList<Postre> calling() {
        return postres;
}
 }
 
