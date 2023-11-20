// middleware para contraseña de 8 caracteres

export default function (req, res, next) {
  try {
    let { password } = req.body;
    if (password.length >= 8) {
      next();
    } else {
      return res.status(411).json({
        status: 411,
        method: req.method,
        path: req.url,
        message: 'password must be at least 8 characters',
      });
    }
  } catch (error) {
    next(error);
  }
}
