import Recipient from '../models/recipients';

class CreateRecipients {
  async store(req, res) {
    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExists) {
      return res.status(401).json({ error: `Recipient already exists!` });
    }

    const {
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }

  async update(req, res) {
    const recipient = await Recipient.findOne({
      where: { id: req.params.id },
    });

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not found' });
    }

    const {
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await recipient.update(req.body);

    return res.json({
      recipient: {
        id,
        name,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
      },
    });
  }
}

export default new CreateRecipients();
