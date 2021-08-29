import { Container } from './styles';

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className='deposit'>R$12000</td>
            <td>Trabalho</td>
            <td>27/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$1500</td>
            <td>Aluguel</td>
            <td>27/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
