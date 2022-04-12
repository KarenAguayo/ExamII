function CompararTernera(codigo,codigoadivina)
{
    var ternera = '#';
    for(var i = 0; i < codigo.length; i++)
    {
        for(var j = 0; j < codigoadivina.length; j++)
        {
            if(codigo[i] == codigoadivina[j+1])
            {
                ternera;
            }
        }
    }
    return ternera;
} 
export default CompararTernera;