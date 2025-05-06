import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, 'usuarios', uid), {
        nome,
        sobrenome,
        dataNascimento,
        email,
        uid,
      });

      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error) {
      alert('Erro no cadastro: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
      <input placeholder="Data de Nascimento" type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
