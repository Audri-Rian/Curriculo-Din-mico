// Importando o config.js da nova localização
import config from '../config/config.js';

// Função para exportar o currículo para PDF
function exportToPDF() {
    const element = document.body;
    const opt = {
        margin: [0, 0, 0, 0],
        filename: 'curriculo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: false
        },
        jsPDF: { 
            unit: 'in', 
            format: 'letter', 
            orientation: 'portrait'
        }
    };

    // Remover o botão de exportação temporariamente
    const exportButton = document.getElementById('exportButton');
    exportButton.style.display = 'none';

    html2pdf().set(opt).from(element).save().then(() => {
        // Restaurar o botão após a exportação
        exportButton.style.display = 'block';
    });
}

export { exportToPDF }; 