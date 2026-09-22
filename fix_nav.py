import os
import re

nav_items = [
    ("Perfil", "../perfil/perfil.html"),
    ("Cursos", "../mis_cursos/mis_cursos.html"),
    ("Ranking", "../Ranking/ranking.html"),
    ("Ranking Historico", "../ranking_historico/ranking_historico.html"),
    ("Mapa de lecciones", "../mapa_lecciones/mapa_lecciones.html"),
    ("Contacto", "../contacto/contacto.html")
]

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'<div class="nav-links">.*?</div>', content, re.DOTALL)
    if not match:
        return False
        
    depth = filepath.count('/')
    
    if depth == 0:
        prefix = "./"
    else:
        prefix = "../" * depth
        
    new_nav = '<div class="nav-links">\n'
    for name, path in nav_items:
        adjusted_path = path.replace("../", prefix)
        
        is_active = False
        filename = os.path.basename(filepath)
        if filename in path:
            is_active = True
            
        active_class = " active" if is_active else ""
        new_nav += f'            <a href="{adjusted_path}" class="nav-link{active_class}">{name}</a>\n'
    new_nav += '        </div>'
    
    new_content = content[:match.start()] + new_nav + content[match.end():]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filepath}")
    return True

html_files = [
    "contacto/contacto.html",
    "mapa_lecciones/mapa_lecciones.html",
    "ranking_historico/ranking_historico.html",
    "leccion/leccion_chino_incorrecta.html",
    "leccion/leccion_chino.html",
    "mis_cursos/mis_cursos.html",
    "perfil/perfil.html",
    "Recuperacion_contrasenia/recuperacion.html",
    "Ranking/ranking.html",
    "leccion/leccion_chino_correcta.html",
    "leccion/leccion.html",
    "leccion/leccion_copia.html",
    "leccion/leccion_correcta.html",
    "leccion/leccion_incorrecta.html",
    "leccion/leccion_chino_copia.html",
    "login/login.html",
    "registro/registro.html"
]

for f in html_files:
    if os.path.exists(f):
        update_file(f)
