import React from 'react'
import Layout from './Layout'  
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const Index = () => (
  <Layout>
    <header className="py-5">
      <h1 className="display-4">Analisador de Balanço Financeiro</h1>
      <p className="lead">Trabalho Apresentado para a disciplina "Contablidade para Informatica" - UNIFEI</p>
      <p><Link to="/analisador"><Button size="lg" color="primary">Começar</Button></Link></p>
    </header>

    <section>
      <h2>Desenvolvido por:</h2>
      <ul>
        <li>Ana Raquel</li>
        <li>Gabriel</li>
        <li>Gabriel</li>
        <li>João Paulo Motta O. Silva</li>
      </ul>
      2018 - Professora Beth
    </section>
  </Layout>
)

export default Index