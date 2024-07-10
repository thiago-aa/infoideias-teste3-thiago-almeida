import styles from '../styles/Form.module.css'

function Form() {
  return (
    <div className={styles.mainContainer}>
      <p>Não encontrou o que procurava? Preencha o formulário e retornaremos o contato. (* indica um campo obrigatório)</p>
      
      <form action="/" method='POST'>
        <div className={styles.formAction}>
          <label htmlFor="name">Nome:*</label>
          <input type="text" name='text' id='text' placeholder='Digite seu nome.'  required/>
        </div>

        <div className={styles.formAction}>
          <label htmlFor="email">Email:*</label>
          <input type="email" name='email' id='email' placeholder='Digite seu email.'  required/>
        </div>

        <div className={styles.formAction}>
          <label htmlFor="phone">Telefone (com DDD e apenas os números):*</label>
          <input type="tel" name='phone' id='phone' placeholder='Digite seu telefone.' pattern='[0-9]{11}' required/>
        </div>

        <div className={styles.formAction}>
          <label htmlFor="birthday">Data de nascimento:*</label>
          <input type="date" name='birthday' id='birthday' placeholder='Digite sua data de nascimento.'  required/>
        </div>

        <div className={styles.formAction}> 
          <label htmlFor="neighborhoods">Bairro desejado:</label>
          <select id="neighborhoods" name="neighborhoods">
            <option value="Centro">Centro</option>
            <option value="Botafogo">Botafogo</option>
            <option value="Copacabana">Copacabana</option>
            <option value="Flamengo">Flamengo</option>
            <option value="Ipanema">Ipanema</option>
            <option value="Leblon">Leblon</option>
            <option value="Leme">Leme</option>
            <option value="Urca">Urca</option>
            <option value="Catete">Catete</option>
            <option value="Glória">Glória</option>
            <option value="Laranjeiras">Laranjeiras</option>
            <option value="Cosme Velho">Cosme Velho</option>
            <option value="Jardim Botânico">Jardim Botânico</option>
            <option value="Gávea">Gávea</option>
            <option value="São Conrado">São Conrado</option>
            <option value="Barra da Tijuca">Barra da Tijuca</option>
            <option value="Recreio dos Bandeirantes">Recreio dos Bandeirantes</option>
            <option value="Vargem Grande">Vargem Grande</option>
            <option value="Vargem Pequena">Vargem Pequena</option>
            <option value="Joá">Joá</option>
            <option value="Santa Teresa">Santa Teresa</option>
            <option value="Lapa">Lapa</option>
            <option value="Estácio">Estácio</option>
            <option value="Tijuca">Tijuca</option>
            <option value="Maracanã">Maracanã</option>
            <option value="Grajaú">Grajaú</option>
            <option value="Vila Isabel">Vila Isabel</option>
            <option value="Andaraí">Andaraí</option>
            <option value="Alto da Boa Vista">Alto da Boa Vista</option>
            <option value="Praça da Bandeira">Praça da Bandeira</option>
            <option value="Rio Comprido">Rio Comprido</option>
            <option value="São Cristóvão">São Cristóvão</option>
            <option value="Benfica">Benfica</option>
            <option value="Mangueira">Mangueira</option>
            <option value="Rocha">Rocha</option>
            <option value="Sampaio">Sampaio</option>
            <option value="Riachuelo">Riachuelo</option>
            <option value="Rio Comprido">Rio Comprido</option>
            <option value="Vila da Penha">Vila da Penha</option>
            <option value="Penha">Penha</option>
            <option value="Penha Circular">Penha Circular</option>
            <option value="Olaria">Olaria</option>
            <option value="Ramos">Ramos</option>
            <option value="Bonsucesso">Bonsucesso</option>
            <option value="Manguinhos">Manguinhos</option>
            <option value="Higienópolis">Higienópolis</option>
            <option value="Jacaré">Jacaré</option>
            <option value="Del Castilho">Del Castilho</option>
            <option value="Inhaúma">Inhaúma</option>
            <option value="Engenho da Rainha">Engenho da Rainha</option>
            <option value="Tomás Coelho">Tomás Coelho</option>
            <option value="Vicente de Carvalho">Vicente de Carvalho</option>
            <option value="Braz de Pina">Braz de Pina</option>
            <option value="Cordovil">Cordovil</option>
            <option value="Parada de Lucas">Parada de Lucas</option>
            <option value="Vigário Geral">Vigário Geral</option>
            <option value="Jardim América">Jardim América</option>
            <option value="Guadalupe">Guadalupe</option>
            <option value="Anchieta">Anchieta</option>
            <option value="Ricardo de Albuquerque">Ricardo de Albuquerque</option>
            <option value="Acari">Acari</option>
            <option value="Irajá">Irajá</option>
            <option value="Colégio">Colégio</option>
            <option value="Madureira">Madureira</option>
            <option value="Campinho">Campinho</option>
            <option value="Quintino Bocaiúva">Quintino Bocaiúva</option>
            <option value="Cavalcanti">Cavalcanti</option>
            <option value="Engenho de Dentro">Engenho de Dentro</option>
            <option value="Méier">Méier</option>
            <option value="Lins de Vasconcelos">Lins de Vasconcelos</option>
            <option value="Jacaré">Jacaré</option>
            <option value="Encantado">Encantado</option>
            <option value="Abolição">Abolição</option>
            <option value="Piedade">Piedade</option>
            <option value="Pilares">Pilares</option>
            <option value="Água Santa">Água Santa</option>
            <option value="Engenho Novo">Engenho Novo</option>
            <option value="Rocha Miranda">Rocha Miranda</option>
            <option value="Honório Gurgel">Honório Gurgel</option>
            <option value="Vaz Lobo">Vaz Lobo</option>
            <option value="Turiaçu">Turiaçu</option>
            <option value="Maria da Graça">Maria da Graça</option>
            <option value="Del Castilho">Del Castilho</option>
            <option value="Inhaúma">Inhaúma</option>
            <option value="Engenho da Rainha">Engenho da Rainha</option>
            <option value="Tomás Coelho">Tomás Coelho</option>
            <option value="Vicente de Carvalho">Vicente de Carvalho</option>
            <option value="Braz de Pina">Braz de Pina</option>
            <option value="Cordovil">Cordovil</option>
            <option value="Parada de Lucas">Parada de Lucas</option>
            <option value="Vigário Geral">Vigário Geral</option>
            <option value="Jardim América">Jardim América</option>
            <option value="Guadalupe">Guadalupe</option>
            <option value="Anchieta">Anchieta</option>
            <option value="Ricardo de Albuquerque">Ricardo de Albuquerque</option>
            <option value="Campo Grande">Campo Grande</option>
            <option value="Bangu">Bangu</option>
            <option value="Realengo">Realengo</option>
            <option value="Padre Miguel">Padre Miguel</option>
            <option value="Santa Cruz">Santa Cruz</option>
          </select>
        </div>

        <div className={styles.formAction}>
          <div className={styles.radiosContainer}>
            <span>Período para contato:</span>
            <div className={styles.radioOption}>
              <input type="radio" name='contactperiod' value="morning" id="morning"/>
              <label htmlFor="morning">Manhã</label>
            </div>
            <div className={styles.radioOption}>
              <input type="radio" name='contactperiod' value="afternoon" id="afternoon"/>
              <label htmlFor="afternoon">Tarde</label>
            </div>
            <div className={styles.radioOption}>
              <input type="radio" name='contactperiod' value="night" id="night"/>
              <label htmlFor="night">Noite</label>
            </div>
          </div>
        </div>

        <div className={styles.formAction}>
          <div className={styles.radiosContainer}>
            <span>Você permite contato via telefone?</span>
            <div className={styles.radioOption}>
              <input type="radio" name='phonecontact' value="yes" id="yes"/>
              <label htmlFor="yes">Sim</label>
            </div>
            <div className={styles.radioOption}>
              <input type="radio" name='phonecontact' value="no" id="no"/>
              <label htmlFor="no">Não</label>
            </div>
          </div>
        </div>

        <div className={styles.formAction}>
          <div className={styles.checkboxContainer}>
            <span>Você procura imovéis para:</span>
            <div className={styles.checkboxOptionsContainer}>
              <div className={styles.checkboxOption}>
                <input type="checkbox" name='rent' value='rent' />
                <label htmlFor="rent">Aluguel</label>
              </div>
              <div className={styles.checkboxOption}>
                <input type="checkbox" name='purchase' value='purchase' />
                <label htmlFor="purchase">Compra</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.submitContainer}>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  )
}

export default Form;