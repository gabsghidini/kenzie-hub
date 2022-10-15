import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "@mui/material";
import * as S from "./styles";
import { newTechSchema } from "../../Validations/newTechSchema";

const Techs = () => {
	const [techs, setTechs] = useState([]);
	const { deleteTech, addTech, isUpdating, updateTechs, showSuccessToast } =
		useContext(UserContext);
	const [loading, setLoading] = useState(false);
	/* Modal */
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	/* Forms */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(newTechSchema),
	});

	const onSubmitFunction = (data) => {
		addTech(data);

		setTechs([...techs, data]);
		localStorage.setItem("@Techs", JSON.stringify([...techs, data]));
		handleClose();
		showSuccessToast("Tecnologia adicionada com sucesso!");
	};

	useEffect(() => {
		setLoading(true);
		const userTechs = JSON.parse(localStorage.getItem("@Techs"));
		setTechs(userTechs);
		setLoading(false);
	}, [isUpdating]);

	return (
		<S.Main>
			<S.TechHeader>
				<h1>Tecnologias</h1>
				<S.TechButton onClick={handleOpen}>+</S.TechButton>
			</S.TechHeader>
			<Modal open={open} onClose={handleClose}>
				<S.TechsContainer onSubmit={handleSubmit(onSubmitFunction)}>
					<h1>Cadastrar nova tecnologia</h1>
					<S.Label>Nome Tecnologia</S.Label>
					<S.Input
						type="text"
						placeholder="React"
						{...register("title")}
					/>
					{errors.title?.message}
					<S.Label>Nível de Habilidade</S.Label>
					<S.Select {...register("status")}>
						<S.Option value="Iniciante">Iniciante</S.Option>
						<S.Option value="Intermediário">Intermediário</S.Option>
						<S.Option value="Avançado">Avançado</S.Option>
					</S.Select>
					{errors.status?.message}
					<S.Button type="submit">Adicionar nova Tech</S.Button>
				</S.TechsContainer>
			</Modal>
			{loading ? (
				<h1>Carregando...</h1>
			) : (
				<S.TechList>
					{techs.map((tech) => (
						<S.Tech key={tech.id}>
							<h2>{tech.title}</h2>
							<div>
								<p>{tech.status}</p>
								<S.TrashIcon
									onClick={() => {
										deleteTech(tech.id);

										const newTechs = techs.filter(
											(item) => item.id !== tech.id
										);
										localStorage.setItem(
											"@Techs",
											JSON.stringify(newTechs)
										);
										setTechs(newTechs);
									}}
								>
									Delete
								</S.TrashIcon>
							</div>
						</S.Tech>
					))}
				</S.TechList>
			)}
		</S.Main>
	);
};

export default Techs;
