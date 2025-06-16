// Função para exportar o currículo para PDF
function exportToPDF() {
    const element = document.body;
    const opt = {
        filename: 'curriculo.pdf',
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