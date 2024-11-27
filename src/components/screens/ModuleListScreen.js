import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screens";
import ModuleList from "../entity/modules/ModuleList.js";
import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations
  const [modules, setModules] = useState(initialModules);

  // State

  // Handlers
  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module });

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  // View
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
