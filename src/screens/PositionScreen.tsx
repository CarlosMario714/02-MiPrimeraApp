import React from "react";
import { StyleSheet, View } from "react-native";

export const PositionScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cajaMorada}></View>

			<View style={styles.cajaNaranja}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#28C4D9",
	},
	cajaMorada: {
		width: 100,
		height: 100,
		backgroundColor: "#5856D6",
		borderWidth: 10,
		borderColor: "white",
		top: 50,
		left: 50,
	},
	cajaNaranja: {
		width: 100,
		height: 100,
		backgroundColor: "#F0A23B",
		borderWidth: 10,
		borderColor: "white",
		top: 0,
	},
});
