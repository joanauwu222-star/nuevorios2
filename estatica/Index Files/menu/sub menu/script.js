(function() {
  
    document.addEventListener('DOMContentLoaded', function() {
 
        const iframe = document.getElementById('contentFrame');
        const welcomeContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background: linear-gradient(135deg, #e8f4f4 0%, #d1e8e8 100%);
                        color: #004a4a;
                    }
                    .welcome-message {
                        text-align: center;
                        padding: 40px;
                    }
                    .welcome-message h2 {
                        font-size: 2rem;
                        margin-bottom: 15px;
                        color: #008080;
                    }
                    .welcome-message p {
                        font-size: 1.1rem;
                        line-height: 1.6;
                    }
                    .icon {
                        font-size: 4rem;
                        margin-bottom: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="welcome-message">
                    <div class="icon"></div>
                    <h2>Bienvenido</h2>
                </div>
            </body>
            </html>
        `;
        
      
        function createWelcomePage() {
            const blob = new Blob([welcomeContent], { type: 'text/html' });
            return URL.createObjectURL(blob);
        }
        
      
    s
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
               
                const iframeContainer = document.querySelector('.iframe-container');
                const originalBg = iframeContainer.style.background;
                
                iframeContainer.style.background = '#f0f0f0';
                
          
                setTimeout(() => {
                    iframeContainer.style.background = originalBg;
                }, 300);
            });
        });
        
    

        iframe.onerror = function() {
            console.error('Error al cargar el contenido en el iframe');
            iframe.srcdoc = `
                <html>
                <body style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial;">
                    <div style="text-align:center;color:red;">
                        <h3>Error al cargar la página</h3>
                        <p>Verifica que la ruta del archivo sea correcta.</p>
                    </div>
                </body>
                </html>
            `;
        };
        
       
        function validatePath(path) {
         
            if (path.startsWith('file://')) {
                console.warn('Ruta de archivo local detectada:', path);
                console.warn('Asegúrate de que los archivos existan en la ubicación especificada');
            }
            return true;
        }
        
   
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                validatePath(href);
            }
        });
    });
})();


function reloadContent() {
    const iframe = document.getElementById('contentFrame');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.location.reload();
    }
}

window.reloadContent = reloadContent;