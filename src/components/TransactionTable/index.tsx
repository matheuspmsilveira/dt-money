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
            <td>R$12000</td>
            <td>Trabalho</td>
            <td>27/08/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento Web</td>
            <td>R$12000</td>
            <td>Trabalho</td>
            <td>27/08/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento Web</td>
            <td>R$12000</td>
            <td>Trabalho</td>
            <td>27/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
