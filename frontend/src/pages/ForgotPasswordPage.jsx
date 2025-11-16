import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {isLoading, forgotPassword} = useAuthStore();
  return (
    <div>ForgotPasswordPage</div>
  )
}

export default ForgotPasswordPage