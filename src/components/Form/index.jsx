import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';
import '../../styles/style.scss';
import { useTranslation } from 'react-i18next';
import {
	Container,
	Wrapper,
	ContactForm,
	ContactInput,
	ContactInputMessage,
	ContactButton,
	ContactTitle,
	PopupModal,
	PopupContent,
	PopupActions,
} from './FormStyle';

const Form = () => {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: 'onSubmit' });

	const [popupOpen, setPopupOpen] = useState(false);
	const [popupStatus, setPopupStatus] = useState('success');
	const [isSending, setIsSending] = useState(false);
	const form = useRef();

	const sendEmail = async () => {
		setIsSending(true);

		try {
			await emailjs.sendForm('service_amgdxf9', 'template_29nxnxi', form.current, 'i2XvsVo2YJWLiCGao');
			setPopupStatus('success');
			setPopupOpen(true);
			reset();
		} catch (error) {

			setPopupStatus('error');
			setPopupOpen(true);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<Container>
			<Wrapper>
				<ContactForm
					ref={form}
					onSubmit={handleSubmit(sendEmail)}
					className='project__color _anim-items _anim-no-hide anim_1'
					action='#'
					name='form'
					noValidate
				>
					<ContactTitle className='project__color'>{t('Form.title')}</ContactTitle>

					<ContactInput
						{...register('user_email', {
							required: t('Form.errors.emailRequired'),
							pattern: {
								value: /^\S+@\S+\.\S+$/i,
								message: t('Form.errors.emailInvalid'),
							},
						})}
						className='project__color input__email'
						placeholder={t('Form.placeholder-email')}
						name='user_email'
						id='email'
						type='email'
						autoComplete='email'
					/>

					{errors.user_email && (
						<div style={{ color: '#ff6b6b', marginTop: '-6px', fontSize: '14px' }}>{errors.user_email.message}</div>
					)}

					<ContactInput
						{...register('user_name', { required: t('Form.errors.nameRequired') })}
						className='project__color input__name'
						placeholder={t('Form.placeholder-name')}
						type='text'
						name='user_name'
						id='name'
						autoComplete='name'
					/>

					{errors.user_name && (
						<div style={{ color: '#ff6b6b', marginTop: '-6px', fontSize: '14px' }}>{errors.user_name.message}</div>
					)}

					<ContactInputMessage
						{...register('textarea', { required: t('Form.errors.messageRequired') })}
						className='project__color input__textarea'
						placeholder={t('Form.placeholder-message')}
						rows='10'
						cols={30}
						name='textarea'
					/>

					{errors.textarea && (
						<div style={{ color: '#ff6b6b', marginTop: '-6px', fontSize: '14px' }}>{errors.textarea.message}</div>
					)}

					<ContactButton id='button' className='button__bg' type='submit' disabled={isSending}>
						{isSending ? t('Form.Button-sending') : t('Form.Button-submit')}
					</ContactButton>
				</ContactForm>

				<Popup open={popupOpen} onClose={() => setPopupOpen(false)} modal closeOnDocumentClick>
					{(close) => (
						<PopupModal className='popup__bg'>
							<PopupContent className='project__color'>
								{popupStatus === 'success' ? t('Form.Button-sent') : t('Form.Button-error')}
							</PopupContent>

							<PopupActions>
								<ContactButton
									className='button__bg'
									onClick={() => {
										setPopupOpen(false);
										close();
									}}
								>
									{t('Form.Button-close')}
								</ContactButton>
							</PopupActions>
						</PopupModal>
					)}
				</Popup>
			</Wrapper>
		</Container>
	);
};

export default Form;
